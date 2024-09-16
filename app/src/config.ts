import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference


  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/fish_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'MyVPN – the best VPN for you',
          description: "Get access to all the content",  // TODO: add link to GitHub
          button: 'Next',
        },

        // form
        {
          extends: 'form',  // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/fish_love.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Why use a VPN?',
          description: '',
          form: [
            {
              id: 'privacy',
              placeholder: 'Protect your privacy',
              type: 'checkbox',
            },
            {
              id: 'security',
              placeholder: 'Access blocked content',
              type: 'checkbox',
            },
            {
              id: 'shopping',
              placeholder: 'Online shopping',
              type: 'checkbox',
            },
            {
              id: 'other',
              placeholder: 'Other',
              type: 'checkbox',
            },
          ],
          button: 'Next',
        },

        // image
        {
          media: {
            type: 'image',
            src: import('./assets/img/hands_up.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: "People trust us",
          description: "There 1B downloads of MyVPN",
          button: {
            content: 'Go to paywall',
            to: '/paywall',
          },
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/lock.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Unlock all features',
      list: [
        'Unlimited traffic',
        'No logs',
        'No ads',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '1$/month',
          discount: '',
          price: 1,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '0.5$/month',
          discount: 'Discount 50%',
          price: 6,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {  // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
