function allocateRoom(start, end) {
  const meetings = [];
  for (let i = 0; i < end.length; i++) {
    meetings.push({ start: start[i], end: end[i], index: i + 1 });
  }
  meetings.sort((a, b) => a.end - b.end);
  let count = 1;
  let currentEndTime = meetings[0].end;
  for (let i = 1; i < meetings.length; i++) {
    if (meetings[i].start > currentEndTime) {
      currentEndTime = meetings[i].end;
      count++;
    }
  }
  return count;
}

console.log(allocateRoom([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]));
