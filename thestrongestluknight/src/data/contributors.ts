import { Map } from 'immutable'

export const credits: Map<ContributorCategory, Contributor[]> = Map({
  Organization: [
    {
      name: 'tam（タム）', url: 'https://twitter.com/tam_vaccount',
      details: 'Project leader, internal translation'
    }, {
      name: 'みらい', url: 'https://twitter.com/Mirai_Malekith/',
      details: 'Internal translation'
    }, {
      name: 'こーでー', url: 'https://twitter.com/kody_lu',
      details: 'Internal translation'
    }, {
      name: 'いいおか', url: 'https://twitter.com/iiokayama8929',
      details: 'Internal translation'
    },
  ],
  Website: [
    { name: 'tam（タム）', url: 'https://twitter.com/tam_vaccount' },
    { name: 'monoAI', url: 'https://twitter.com/monoai_' }
  ],
  Artwork: [
    // Please input their name (Japanese preferred), and Twitter URL
    // If no Twitter URL then Pixiv URL

    // [OK!!!] Coco with Luna back: [TAIWAN]
    // https://www.pixiv.net/en/artworks/79038147

    // [OK!!!] Cozy Gen 4 [EN] [REQUESTED ON TWITTER]
    // https://www.pixiv.net/en/artworks/89126212
    // https://www.pixiv.net/en/artworks/86730174 <= need to ask this too

    // [OK!!!] chibi yonksei [JP] [PRELIMINARY DM REQUEST ON TWITTER]
    // https://www.pixiv.net/en/artworks/89232325

    // [OK!!!] Pixel art yonksei [JP]
    // https://www.pixiv.net/en/artworks/88113908

  ],
  Clipping: [
    { name: 'Cain Chin', url: 'https://twitter.com/cain_chin' },
    // Please include the clipping channels' names and their Twitter URL
    // if no Twitter URL then their YouTube ch URL
    // https://www.youtube.com/playlist?list=PLAW64Usi0SJFIRk-2RzTVk9vExyIBhTHw&jct=HVa9mT52CFQx49UuCLQQNy1RsNLt0g
  ],
  'HimeCoco playlist': [
    { name: 'Cain Chin', url: 'https://twitter.com/cain_chin' },
    { name: 'Marshall Lee', url: 'https://twitter.com/Marshall_Lee_A' },
  ]
})

///////////////////////////////////////////////////////////////////////////////

const contributorCategories = [
  'Artwork',
  'Organization',
  'Website',
  'Clipping',
  'HimeCoco playlist'
] as const

type ContributorCategory = typeof contributorCategories[number]

interface Contributor {
  name: string,
  url?: string,
  details?: string
}
