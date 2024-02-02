var merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals;
}

// Sort intervals based on start points
intervals.sort((a, b) => a[0] - b[0]);

let mergedIntervals = [intervals[0]];

for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let lastMerged = mergedIntervals[mergedIntervals.length - 1];

    if (currentInterval[0] <= lastMerged[1]) {
        // Merge overlapping intervals
        lastMerged[1] = Math.max(lastMerged[1], currentInterval[1]);
    } else {
        // Add non-overlapping interval to the result
        mergedIntervals.push(currentInterval);
    }
}

return mergedIntervals;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const mergedResult = merge(intervals);

console.log(mergedResult);
