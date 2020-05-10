export function formatTime(timestamp) {
    const date = new Date(timestamp);
    let hours = date.getHours();
    let merideum = "";
    if(hours > 12) {
        hours = (hours - 12).toString();
        merideum = "PM";
    } else {
        hours = hours.toString();
        merideum = "AM";
    }
    const minutes = date.getMinutes().toString();
    return `${hours}:${minutes} ${merideum}`;
}