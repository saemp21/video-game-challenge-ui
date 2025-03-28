import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerArray } from "./router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store";
import "./index.css";

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_5gHWagiMu",
  client_id: "7mqoe47nd4eht0hjo882qs4hqq",
  redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",
  response_type: "code",
  scope: "aws.cognito.signin.user.admin openid",
};

const router = createBrowserRouter(routerArray);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <Provider store={store}>
        <PersistGate loading={<>...</>} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </AuthProvider>
  </StrictMode>
);
