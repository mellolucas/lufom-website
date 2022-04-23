// pages/_middleware.ts

import {NextRequest, NextResponse } from 'next/server'

export async function middleware(req, ev) {
  const { pathname } = req.nextUrl
  if (pathname === '/links/github') {
    return NextResponse.redirect('https://github.com/mellolucas')
  } else if (pathname === '/links/twitter_follow') {
    return NextResponse.redirect('https://twitter.com/intent/follow?screen_name=lufom_')
  } else if (pathname === '/links/twitter') {
    return NextResponse.redirect('https://twitter.com/lufom_')
  } else if (pathname === '/links/linkedin') {
    return NextResponse.redirect('https://www.linkedin.com/in/lufom')
  } else if (pathname === '/links/goodreads') {
    return NextResponse.redirect('https://www.goodreads.com/lucasmello')
  } else if (pathname === '/links/tryhackme') {
    return NextResponse.redirect('https://tryhackme.com/p/lufom')
  } else if (pathname === '/links/hackerone') {
    return NextResponse.redirect('https://hackerone.com/lufom')
  } else if (pathname === '/links/google_devs') {
    return NextResponse.redirect('https://developers.google.com/profile/u/lufom')
  } else if (pathname === '/links/qwiklabs') {
    return NextResponse.redirect('https://www.qwiklabs.com/public_profiles/d10be506-5c96-4b8d-86e7-70dd7aeb5910')
  }  
  return NextResponse.next()
}