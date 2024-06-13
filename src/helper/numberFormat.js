
import numeral from 'numeral';
export function formatNumber(number) {
    return numeral(number).format('0,0');
}