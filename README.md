## Ionic2 Firebase Shopping Cart
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/arjunsk/ionic-firebase-shopping-cart)

### Instructions

1. Create a firebase project [here](https://console.firebase.google.com/).
<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/kpPTfcZs2AmDLYbvJ42HTnR3/arjunsk/ionic2_firebase_shopping_cart'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/kpPTfcZs2AmDLYbvJ42HTnR3/arjunsk/ionic2_firebase_shopping_cart.svg' />
</a>
2. Enter the project credentials in [this file](/src/app/app.module.ts). [__DEMO](/DEMO/demo_firebase_cred.png)

3. Enable Email authentication. [__DEMO](/DEMO/demo_email_auth.png)

4. Import the data into database using [this json](/FIREBASE_DATA/dekene-export.json). [__DEMO](/DEMO/demo_import_json.png)

5. Update Security rules to [__DEMO](/DEMO/demo_database_rules.png)
```bash
{
  "rules": {
   	".read": true,
  	".write": true
  }
}
```

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/kpPTfcZs2AmDLYbvJ42HTnR3/arjunsk/ionic2_firebase_shopping_cart'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/kpPTfcZs2AmDLYbvJ42HTnR3/arjunsk/ionic2_firebase_shopping_cart.svg' />
</a>

5. Run the following the terminal

```bash
$ cd ionic2_firebase_shopping_cart
$ npm install 
$ ionic serve
```
### TODO

    1. Email verification
    2. Product Search, Filter
    3. Backend for the same


### DEMO
<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/kpPTfcZs2AmDLYbvJ42HTnR3/arjunsk/ionic2_firebase_shopping_cart'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/kpPTfcZs2AmDLYbvJ42HTnR3/arjunsk/ionic2_firebase_shopping_cart.svg' />
</a>

![FoodKart ](/DEMO/ionic2_shopping_cart.gif)

