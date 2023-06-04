import {RequestConfig} from "./RequestConfig.ts";

export type ApplyData = (data: unknown) => void
export type SendRequest = (requestConfig: RequestConfig, applyData: ApplyData) => void