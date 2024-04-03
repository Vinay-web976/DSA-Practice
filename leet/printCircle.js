class petrolPump {
  constructor(petrol, distance) {
    this.petrol = petrol;
    this.distance = distance;
  }
}

function printTour(arr, n) {
  let start = 0;
  let end = 1;
  let currPetrol = arr[start].petrol - arr[start].distance;

  while (start != end || currPetrol < 0) {
    while (currPetrol < 0 && start !== end) {
      currPetrol -= arr[start].petrol - arr[start].distance;
      start = (start + 1) % n;

      if (start === 0) {
        return -1;
      }
    }

    currPetrol += arr[end].petrol - arr[end].distance;
    end = (end + 1) % n;
  }

  return start;
}

let arr = [new petrolPump(6, 4), new petrolPump(3, 6), new petrolPump(7, 3)];
let n = arr.length;
console.log(printTour(arr, n));
