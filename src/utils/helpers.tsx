    import dayjs from 'dayjs';
    
    export const formatTime = (time?: string) => {
        if (!time) return '';
        return dayjs(`2000-01-01T${time}`).format('HH:mm');
    };