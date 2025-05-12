import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export const deliveryOptions = [{
  id: '1',
  name: 'Horse Carriage',
  deliveryDays: 15,
  priceCents: 0
}, {
  id: '2',
  name: 'Mana-powered Airship',
  deliveryDays: 7,
  priceCents: 5049
}, {
  id: '3',
  name: 'Teleportation Gate',
  deliveryDays: 0,
  priceCents: 7549
}];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    });

    return deliveryOption || deliveryOptions[0];
}

function isWeekend(date) {
    const dayOfWeek = date.format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

export function calculateDeliveryDate(deliveryOption) {
    if (deliveryOption.deliveryDays === 0) {
        return "Instant Receive"; // Handle instant delivery
    }

    let remainingDays = deliveryOption.deliveryDays;
    let deliveryDate = dayjs();

    while (remainingDays > 0) {
        deliveryDate = deliveryDate.add(1, 'day');

        if (!isWeekend(deliveryDate)) {
            remainingDays--;
        }
    }

    const dateString = deliveryDate.format('dddd, MMMM D');
    return dateString;
}