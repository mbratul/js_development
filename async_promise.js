// promise flow control
/**
 * a promisee has two option
 * 1 resolve means (a successful promise)
 * 2 reject means (a failed promis)
 */
const hasMeeting = false;

/**
 * basic structure of define a promise
 */
const promise = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      title: "technical meeting",
      location: "google meet",
      time: "09:00 AM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("meeting already scheduled"));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.title} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  //   return new Promise((resolve) => {
  //     resolve(calender);
  //   });
  return Promise.resolve(calender); //shorter format of promise resolve method
};

// promise chaining
promise
  .then(addToCalender)
  .then((calender) => {
    console.log(calender);
  })
  .catch((err) => {
    console.log(err.message);
  });
console.log(`lets see what happened to me`);
