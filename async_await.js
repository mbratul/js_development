//async/await example in js

const hasMeeting = false;

const meetingPromise = new Promise((resolve, reject) => {
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
    return new Promise((resolve) => {
      resolve(calender);
    });
  // return Promise.resolve(calender); //shorter format of promise resolve method
};

// promise chaining
/* meetingPromise
  .then(addToCalender)
  .then((calender) => {
    console.log(calender);
  })
  .catch((err) => {
    console.log(err.message);
  }); */
console.log(`lets see what happened to me`);

// async/await flow control

async function meeting() {

  try {
    const meetingDetails = await meetingPromise
  const calender = await addToCalender(meetingDetails)
  console.log(calender);
  } catch (error) {
    console.log(error.message);
  }
}

meeting()

console.log('i am here');