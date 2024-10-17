function timeAgo(dateString) {
    const now = new Date();
    const pastDate = new Date(dateString);
    const secondsAgo = Math.floor((now - pastDate) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
    };

    for (let unit in intervals) {
        const interval = Math.floor(secondsAgo / intervals[unit]);
        if (interval > 1) {
            return `${interval} ${unit}s ago`;
        } else if (interval === 1) {
            return `1 ${unit} ago`;
        }
    }
    return "just now";
}

export default timeAgo;