import { NextRequest } from 'next/server'
import { serverFetch } from '@/app/api/_lib/fetch'

export const GET = async (
  request: NextRequest,
) => {
  const { searchParams } = new URL(request.url)
  console.log('getMenuRequestStores params', searchParams)
  return await serverFetch(
    `/stores/menu-requests?${searchParams}`,
    {}
  )
}
