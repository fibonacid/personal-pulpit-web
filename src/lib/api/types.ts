import { type definitions as Definitions } from '../../../generated/api'

type ApiDefinitions = Definitions
type ApiDefinitionKeys = keyof ApiDefinitions

type ResolveDefinitionKey<T extends string> = Extract<ApiDefinitionKeys, `${T}.${string}`> extends `${string}.${infer U}` ? U : never

type ApiHandlerKeys = ResolveDefinitionKey<'handlers'>
type ApiHelperKeys = ResolveDefinitionKey<'helpers'>

export type ApiHandler<T extends ApiHandlerKeys> = ApiDefinitions[`handlers.${T}`]
export type ApiHelper<T extends ApiHelperKeys> = ApiDefinitions[`helpers.${T}`]

export type ApiResponse<T extends Record<string, any> = Record<string, unknown>> = Exclude<ApiHelper<'HttpResponse'>, "data"> & {
	data?: T
}
export type ApiFetcher<TInput extends Record<string, any>, TOutput extends Record<string, any>> = (input: TInput) => Promise<ApiResponse<TOutput>>

