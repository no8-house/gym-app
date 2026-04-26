import { useParams, Link } from 'react-router-dom'
import { useGym } from '../contexts/GymContext'

const GymDetailPage = () => {
  const { gyms, toggleFavorite, deleteGym } = useGym()

  const { id } = useParams()
  const gymDetail = gyms.find((gym) => gym.id === id)

  if (!gymDetail) {
    return <p className="pt-20 text-center">ジムが見つかりません</p>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* MV */}
      <div className="pt-30 max-w-7xl mx-auto px-10">
        {/* ジム名・タグ・お気に入り */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {gymDetail.name}
            </h1>
            <div className="flex gap-2">
              {gymDetail.basicInfo.type.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <button
            className="flex flex-col items-center gap-1 mt-2"
            onClick={(e) => {
              e.preventDefault()
              toggleFavorite(gymDetail.id)
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill={gymDetail.isFavorite ? 'gold' : 'rgba(92, 97, 108, 0.4)'}
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* 画像グリッド */}
        <div className="flex gap-2 h-[480px] rounded-xl overflow-hidden">
          <div className="w-1/2 flex-shrink-0">
            <img
              src={gymDetail.thumbnail}
              alt={gymDetail.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 grid grid-cols-2 gap-2">
            {gymDetail.photos.slice(0, 4).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${gymDetail.name}-${index}`}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 py-10">
        {/* マシン情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-300">
            マシン・器具
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {gymDetail.equipment.machines.map((machine) => (
              <div
                key={machine.name}
                className="flex justify-between items-center bg-white px-4 py-3 rounded"
              >
                <span className="text-gray-700">{machine.name}</span>
                <span className="font-bold text-gray-900">
                  {machine.count}
                  {machine.unit}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 設備情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-300">
            設備・サービス
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'シャワー', value: gymDetail.facilities.shower },
              { label: 'ロッカー', value: gymDetail.facilities.locker },
              { label: '駐車場', value: gymDetail.facilities.parking },
              { label: '駐輪場', value: gymDetail.facilities.bicycleParking },
              { label: '24時間営業', value: gymDetail.facilities.openAllDay },
              { label: 'WiFi', value: gymDetail.facilities.wifi },
              {
                label: 'タトゥーOK',
                value: gymDetail.facilities.tattooFriendly,
              },
              { label: '給水器', value: gymDetail.facilities.waterDispenser },
              {
                label: 'ストレッチエリア',
                value: gymDetail.facilities.stretchArea,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className={item.value ? 'text-red-500' : 'text-gray-300'}>
                  {item.value ? '✓' : '✗'}
                </span>
                <span
                  className={item.value ? 'text-gray-800' : 'text-gray-400'}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-300">
            基本情報
          </h2>
          <div className="flex gap-8">
            {/* 左：Googleマップ */}
            <div className="w-1/2 flex-shrink-0">
              <iframe
                src={gymDetail.basicInfo.mapUrl}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* 右：テーブル */}
            <div className="w-1/2">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500 w-28">施設名</td>
                    <td className="py-3 text-gray-800">{gymDetail.name}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">住所</td>
                    <td className="py-3 text-gray-800">{gymDetail.address}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">アクセス</td>
                    <td className="py-3 text-gray-800">
                      {gymDetail.basicInfo.access}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">営業時間</td>
                    <td className="py-3 text-gray-800">
                      {gymDetail.basicInfo.time}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">公式サイト</td>
                    <td className="py-3">
                      <a
                        href={gymDetail.basicInfo.ohp}
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-500 underline"
                      >
                        {gymDetail.basicInfo.ohp}
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">SNS</td>
                    <td className="py-3 flex gap-3">
                      {gymDetail.basicInfo.sns.map((s) => (
                        <a
                          key={s.snsUrl}
                          href={s.snsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-red-500 underline"
                        >
                          {s.snstype}
                        </a>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-500">補足</td>
                    <td className="py-3 text-gray-800">
                      {gymDetail.basicInfo.otherText}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Link
          to="/"
          className="inline-block text-sm text-red-500 hover:opacity-70 transition-opacity"
        >
          ← 一覧に戻る
        </Link>
      </div>
    </div>
  )
}

export default GymDetailPage
