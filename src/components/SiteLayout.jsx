import React from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { FloatingOrder } from './FloatingOrder.jsx';
import { useReveal } from '../hooks/useReveal.js';
export function SiteLayout({children}){useReveal();return <><div className="announcement">Freshly baked happiness <span>✦</span> Chintal, Hyderabad <span>✦</span> Made for your sweet moments</div><Header/><main>{children}</main><Footer/><FloatingOrder/></>}