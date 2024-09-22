function timeAgo(timeStamp: number) {
    const now = new Date();
    const diff = now.getTime() - timeStamp * 1000;
    if (isNaN(diff) || diff == null || diff == undefined || diff < 0) {
        return "Unknown time";
    }
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return years === 1 ? '1 year ago' : `${years} years ago`;
    } else if (months > 0) {
        return months === 1 ? '1 month ago' : `${months} months ago`;
    } else if (days > 0) {
        return days === 1 ? '1 day ago' : `${days} days ago`;
    } else if (hours > 0) {
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else if (minutes > 0) {
        return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    } else {
        return seconds <= 1 ? 'Just now' : `${seconds} seconds ago`;
    }
}

function timeLeft(timeStamp: number) {
    const now = new Date();
    const diff = timeStamp * 1000 - now.getTime();
    if (isNaN(diff) || diff == null || diff == undefined) {
        return "Unknown time";
    }

    if (diff < 0) {
        return "Listing Expired";
    }

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return years === 1 ? '1 year' : `${years} years`;
    } else if (months > 0) {
        return months === 1 ? '1 month' : `${months} months`;
    } else if (days > 0) {
        return days === 1 ? '1 day' : `${days} days`;
    } else if (hours > 0) {
        return hours === 1 ? '1 hour' : `${hours} hours`;
    } else if (minutes > 0) {
        return minutes === 1 ? '1 minute' : `${minutes} minutes`;
    } else {
        return seconds <= 1 ? 'Just now' : `${seconds} seconds`;
    }
}

function isExpired(timeStamp: number) {
    const now = new Date();
    return now.getTime() > timeStamp * 1000;
}

export { timeAgo, timeLeft, isExpired };