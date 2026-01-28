
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  fullContent?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}

export interface QuoteForm {
  fullName: string;
  phoneNumber: string;
  email: string;
  date: string;
  time: string;
  serviceType: string;
  projectDetails: string;
}

export enum Page {
  Home = '/',
  Services = '/services',
  Ghostwriting = '/ghostwriting-services',
  BookGhostwriting = '/book-ghostwriting',
  AmazonKDP = '/amazon-kdp-ghostwriting',
  Memoir = '/memoir-ghostwriting',
  Quotation = '/quotation',
  Process = '/process',
  About = '/about',
  FAQ = '/faq',
  Blog = '/blog',
}
