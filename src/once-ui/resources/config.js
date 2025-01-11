const baseURL = 'demo.once-ui.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'HibuNode',
    description: '...'
}


// default open graph data
const og = {
    title: 'Official Website',
    description: 'To explore the blockchain-based projects and technical contributions, please visit',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    name: 'Official Website ',
    description: 'To explore the blockchain-based projects and technical contributions, please visit',
    email: 'cskngrcy2024@gmail.com'
}

// social links
const social = {
    twitter: 'https://www.twitter.com/coskungurcayy',
    telegram: 'https://www.t.me/nikolorenzo',
    discord: 'https://discord.com/invite/nikolorenzo'
}

export { baseURL, style, meta, og, schema, social };
