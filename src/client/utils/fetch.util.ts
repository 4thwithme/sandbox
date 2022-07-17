interface IPostParams {
  pathEnd: string;
  body?: string;
}

export const POST = async ({
  pathEnd,
  body = '{}',
}: IPostParams): Promise<Response> =>
  await fetch(`http://localhost:7777/api/v1/${pathEnd}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body,
  });
