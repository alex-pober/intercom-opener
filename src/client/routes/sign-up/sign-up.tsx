import React from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

export default function Signup() {
  return (
    <div>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
        />
    </div>
  )
}
