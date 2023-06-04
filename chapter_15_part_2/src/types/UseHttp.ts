import { SendRequest} from "./types.ts";

export interface UseHttp {
    isLoading: boolean,
    error: string | null,
    sendRequest: SendRequest
}