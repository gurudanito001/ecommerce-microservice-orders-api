export default class MessageHelpers {

    public successResponse = (message, data) => {
        return {
            success: true,
            message: message,
            data: data
        }
    }

    public errorResponse = (message) => {
        return {
            success: false,
            message: message,
            data: null
        }
    }
}