export default function prettyNumber(number) {
    if (number > 1350000) {
        return '1M';
    } else if (number > 12560) {
        return '12.5K'
    } else if (number > 10350) {
        return '10K';
    } else if (number > 1340) {
        return '1K';
    } else {
        return number.toString();
    }
}
