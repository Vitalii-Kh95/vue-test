export const useReferer = () => {
    const referer = useState('referer', () => '');
    const setReferer = (newRef: string) => {
        if (newRef !== undefined) {
            referer.value = newRef;
        }
    }
    return { referer, setReferer };
}