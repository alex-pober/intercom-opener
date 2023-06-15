import React from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import "./sign-up.css"

console.log(import.meta.env)
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

export default function Signup() {
  return (
    <div className="Auth">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
        />
    </div>
  )
}
