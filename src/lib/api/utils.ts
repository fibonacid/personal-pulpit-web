export async function jsonFetcher<TResponse extends Record<string, any>>(info: RequestInfo): Promise<TResponse> {
	// inject headers
	const request = new Request(info, {
		headers: new Headers({
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		}),
	});

	request.headers.set('Content-Type', 'application/json');
	request.headers.set('Accept', 'application/json');

	const response = await fetch(request);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data: TResponse = await response.json();
	return data;
}

