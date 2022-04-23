// pages/_middleware.ts

import {NextRequest, NextResponse } from 'next/server'

export async function middleware(req, ev) {
  const { pathname } = req.nextUrl
  if (pathname === '/links/github') {
    return NextResponse.redirect('https://github.com/mellolucas')
  }
  return NextResponse.next()
}