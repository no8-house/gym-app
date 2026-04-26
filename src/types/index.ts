type Machine = {
  name: string // マシン名
  count: number // 台数や重量など
  unit: string // '台' や 'kg' など単位
}

type Equipment = {
  machines: Machine[]
}

type Facilities = {
  shower: boolean // シャワー
  locker: boolean // 更衣室・ロッカー
  parking: boolean // 駐車場
  bicycleParking: boolean // 駐輪場
  openAllDay: boolean // 24時間営業
  wifi: boolean // WiFi
  tattooFriendly: boolean // タトゥーOK
  waterDispenser: boolean // 給水器
  stretchArea: boolean // ストレッチエリア
}

type SnsLink = {
  snstype: string
  snsImg: string
  snsUrl: string
}

type BasicInfo = {
  // 基本情報（住所・営業時間・SNSなど）
  time: string
  type: string[]
  sns: SnsLink[]
  access: string
  mapUrl: string
  ohp: string
  otherText: string
}

type Gym = {
  id: string
  thumbnail: string
  name: string
  address: string
  isFavorite: boolean
  photos: string[]
  description: string
  equipment: Equipment
  facilities: Facilities
  basicInfo: BasicInfo
}

export type { Gym }
