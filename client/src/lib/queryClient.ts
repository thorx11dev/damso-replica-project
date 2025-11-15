import { QueryClient } from "@tanstack/react-query";

async function throwIfNotOk(res: Response) {
  if (!res.ok) {
    let message;
    try {
      const body = await res.json();
      message = body.message;
    } catch (error) {
      message = res.statusText || `Request failed with status ${res.status}`;
    }
    throw new Error(message);
  }
}

async function handleFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, options);
  await throwIfNotOk(res);

  if (res.status === 204) {
    return undefined as T;
  }

  return res.json();
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const url = queryKey[0] as string;
        return handleFetch(url);
      },
      staleTime: Infinity,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export async function apiRequest<T = any>(
  url: string,
  options?: RequestInit
): Promise<T> {
  return handleFetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
}
