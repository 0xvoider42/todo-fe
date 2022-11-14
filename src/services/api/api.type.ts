export interface SignInBody {
  token: { access_token: string };
  email: string;
}

export interface SignUpBody {
  token: { access_token: string };
}
