// src/aws/amplifyConfig.ts
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_NhNo7vjQ3',
      userPoolClientId: '56smpmo8n7nua9v5fhnsq97jd2',
      loginWith: {
        email: true,
      },

    },
  }
});

// saemp21@gmail.com
// Password123*
//   mjirikg0l0hqhgd8nmq7csa92
// 10ciqj8ot9709phdt5ud4o3ucjkfb69lpdqdok61gis8hi0nmi6a