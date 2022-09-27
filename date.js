module.exports.getDate = getDate;
module.exports.getDay = getDay;

function getDate() {
    const option = {
        weekday: "long",
        day: "numeric",
        month: "long"
      }
      const day = new Date();
      const today = day.toLocaleDateString("en-US", option);
      return today;
}

function getDay() {
  const option = {
      weekday: "long",
    }
    const day = new Date();
    const today = day.toLocaleDateString("en-US", option);
    return today;
}