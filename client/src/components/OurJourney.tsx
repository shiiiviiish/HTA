import React, { useState } from 'react';

interface Exhibition {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  color: string;
  textColor: string;
}

const exhibitions: Exhibition[] = [
  {
    id: 1,
    title: "Colors of Healing",
    date: "March 2024",
    location: "Delhi Art Gallery, New Delhi",
    description: "An intimate exhibition exploring how color therapy and expressive painting helped participants process emotions and find inner calm.",
    color: '#F5DD61',
    textColor: '#374151',
  },
  {
    id: 2,
    title: "Brushstrokes and Breaths",
    date: "July 2024",
    location: "The Creative Studio, Gurugram",
    description: "A weekend workshop where participants learned mindful painting techniques paired with breathing exercises.",
    color: '#59D5E0',
    textColor: '#ffffff',
  },
  {
    id: 3,
    title: "Art as Medicine",
    date: "November 2024",
    location: "Community Center, Sonipat",
    description: "A community-focused event bringing art therapy to local schools and NGOs. Over 100 children participated in guided art sessions.",
    color: '#F4538A',
    textColor: '#ffffff',
  },
];
