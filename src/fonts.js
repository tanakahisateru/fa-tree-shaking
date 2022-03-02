import { library,dom } from '@fortawesome/fontawesome-svg-core'
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons'

// solid 系ぜんぶ追加するならこう
// library.add(fas)

library.add(
  faCode,
  faHeart,
  // ここに使うアイコンを足すと fonts.min.js がちょっとづつ太る
)

dom.watch()
