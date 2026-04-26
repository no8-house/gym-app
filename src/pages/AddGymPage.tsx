import { useState } from 'react'
import type { Gym } from '../types'
import { useGym } from '../contexts/GymContext'
import { useNavigate } from 'react-router-dom'

const AddGymPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [addData, setAddData] = useState<Gym>({
    id: crypto.randomUUID(),
    thumbnail: '',
    name: '',
    address: '',
    isFavorite: false,
    photos: [],
    description: '',
    equipment: { machines: [] },
    facilities: {
      shower: false,
      locker: false,
      parking: false,
      bicycleParking: false,
      openAllDay: false,
      wifi: false,
      tattooFriendly: false,
      waterDispenser: false,
      stretchArea: false,
    },
    basicInfo: {
      time: '',
      type: [],
      sns: [],
      access: '',
      mapUrl: '',
      ohp: '',
      otherText: '',
    },
  })
  const { addGym } = useGym()
  const navigate = useNavigate()
  const handleSubmit = () => {
    addGym(addData)
    navigate('/')
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="pt-32 px-10 max-w-3xl mx-auto pb-20">
        <h1 className="text-3xl font-bold mb-10">ジム追加</h1>

        {/* ステップナビゲーション */}
        <div className="flex items-center mb-10">
          {[
            { number: 1, label: '基本情報' },
            { number: 2, label: '設備' },
            { number: 3, label: 'マシン' },
            { number: 4, label: '詳細情報' },
          ].map((step, index) => (
            <div
              key={step.number}
              className={`flex items-center${index < 3 ? ' flex-1' : ''}`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    currentStep === step.number
                      ? 'bg-red-500 text-white'
                      : currentStep > step.number
                        ? 'bg-red-200 text-red-700'
                        : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {currentStep > step.number ? '✓' : step.number}
                </div>
                <span
                  className={`text-xs mt-1 ${currentStep === step.number ? 'text-red-500 font-bold' : 'text-gray-400'}`}
                >
                  {step.label}
                </span>
              </div>
              {index < 3 && (
                <div
                  className={`flex-1 h-0.5 mb-4 mx-2 ${currentStep > step.number ? 'bg-red-200' : 'bg-gray-200'}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* フォームエリア */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          {currentStep === 1 && (
            <div>
              <h2 className="text-lg font-bold mb-6 pb-2 border-b border-gray-200">
                基本情報
              </h2>
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ジム名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={addData.name}
                    onChange={(e) =>
                      setAddData({ ...addData, name: e.target.value })
                    }
                    placeholder="例：ゴールドジム渋谷"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    住所 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={addData.address}
                    onChange={(e) =>
                      setAddData({ ...addData, address: e.target.value })
                    }
                    placeholder="例：東京都渋谷区..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    サムネイル画像URL
                  </label>
                  <input
                    type="text"
                    value={addData.thumbnail}
                    onChange={(e) =>
                      setAddData({ ...addData, thumbnail: e.target.value })
                    }
                    placeholder="https://..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    詳細画像
                  </label>
                  <div className="flex flex-col gap-3">
                    {addData.photos.map((photo, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <input
                          type="text"
                          value={photo}
                          onChange={(e) => {
                            const photos = [...addData.photos]
                            photos[index] = e.target.value
                            setAddData({ ...addData, photos })
                          }}
                          placeholder="https://..."
                          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-400"
                        />

                        <button
                          onClick={() => {
                            const photos = addData.photos.filter(
                              (_, i) => i !== index,
                            )
                            setAddData({ ...addData, photos })
                          }}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                  {addData.photos.length < 4 && (
                    <button
                      onClick={() => {
                        const photos = [...addData.photos, '']
                        setAddData({ ...addData, photos })
                      }}
                      className="w-full py-2.5 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-red-400 hover:text-red-500 transition-colors"
                    >
                      ＋ 写真を追加
                    </button>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ジャンル
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      '筋トレ',
                      'ダイエット',
                      '有酸素',
                      'ヨガ',
                      'パワーリフティング',
                      'クロスフィット',
                      'ボクシング',
                    ].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => {
                          const types = addData.basicInfo.type.includes(tag)
                            ? addData.basicInfo.type.filter((t) => t !== tag)
                            : [...addData.basicInfo.type, tag]
                          setAddData({
                            ...addData,
                            basicInfo: { ...addData.basicInfo, type: types },
                          })
                        }}
                        className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                          addData.basicInfo.type.includes(tag)
                            ? 'bg-red-500 text-white border-red-500'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-red-300'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <h2 className="text-lg font-bold mb-6 pb-2 border-b border-gray-200">
                設備・サービス
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { key: 'shower', label: 'シャワー' },
                  { key: 'locker', label: 'ロッカー' },
                  { key: 'parking', label: '駐車場' },
                  { key: 'bicycleParking', label: '駐輪場' },
                  { key: 'openAllDay', label: '24時間営業' },
                  { key: 'wifi', label: 'WiFi' },
                  { key: 'tattooFriendly', label: 'タトゥーOK' },
                  { key: 'waterDispenser', label: '給水器' },
                  { key: 'stretchArea', label: 'ストレッチエリア' },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-red-300 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={
                        addData.facilities[
                          item.key as keyof typeof addData.facilities
                        ]
                      }
                      onChange={(e) =>
                        setAddData({
                          ...addData,
                          facilities: {
                            ...addData.facilities,
                            [item.key]: e.target.checked,
                          },
                        })
                      }
                      className="accent-red-500 w-4 h-4"
                    />
                    <span className="text-sm text-gray-700">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-lg font-bold mb-6 pb-2 border-b border-gray-200">
                マシン・器具
              </h2>
              <div className="flex flex-col gap-3 mb-4">
                {addData.equipment.machines.map((machine, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <input
                      type="text"
                      value={machine.name}
                      onChange={(e) => {
                        const machines = [...addData.equipment.machines]
                        machines[index] = {
                          ...machines[index],
                          name: e.target.value,
                        }
                        setAddData({ ...addData, equipment: { machines } })
                      }}
                      placeholder="マシン名"
                      className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-400"
                    />
                    <input
                      type="number"
                      value={machine.count}
                      onChange={(e) => {
                        const machines = [...addData.equipment.machines]
                        machines[index] = {
                          ...machines[index],
                          count: Number(e.target.value),
                        }
                        setAddData({ ...addData, equipment: { machines } })
                      }}
                      placeholder="数量"
                      className="w-20 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-400"
                    />
                    <input
                      type="text"
                      value={machine.unit}
                      onChange={(e) => {
                        const machines = [...addData.equipment.machines]
                        machines[index] = {
                          ...machines[index],
                          unit: e.target.value,
                        }
                        setAddData({ ...addData, equipment: { machines } })
                      }}
                      placeholder="単位"
                      className="w-20 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-400"
                    />
                    <button
                      onClick={() => {
                        const machines = addData.equipment.machines.filter(
                          (_, i) => i !== index,
                        )
                        setAddData({ ...addData, equipment: { machines } })
                      }}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  const machines = [
                    ...addData.equipment.machines,
                    { name: '', count: 0, unit: '台' },
                  ]
                  setAddData({ ...addData, equipment: { machines } })
                }}
                className="w-full py-2.5 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-red-400 hover:text-red-500 transition-colors"
              >
                ＋ マシンを追加
              </button>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-lg font-bold mb-6 pb-2 border-b border-gray-200">
                詳細情報
              </h2>
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    営業時間
                  </label>
                  <input
                    type="text"
                    value={addData.basicInfo.time}
                    onChange={(e) =>
                      setAddData({
                        ...addData,
                        basicInfo: {
                          ...addData.basicInfo,
                          time: e.target.value,
                        },
                      })
                    }
                    placeholder="例：24時間営業 / 9:00〜22:00"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    アクセス
                  </label>
                  <input
                    type="text"
                    value={addData.basicInfo.access}
                    onChange={(e) =>
                      setAddData({
                        ...addData,
                        basicInfo: {
                          ...addData.basicInfo,
                          access: e.target.value,
                        },
                      })
                    }
                    placeholder="例：渋谷駅から徒歩5分"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    公式サイトURL
                  </label>
                  <input
                    type="text"
                    value={addData.basicInfo.ohp}
                    onChange={(e) =>
                      setAddData({
                        ...addData,
                        basicInfo: {
                          ...addData.basicInfo,
                          ohp: e.target.value,
                        },
                      })
                    }
                    placeholder="https://..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    GoogleマップURL
                  </label>
                  <input
                    type="text"
                    value={addData.basicInfo.mapUrl}
                    onChange={(e) =>
                      setAddData({
                        ...addData,
                        basicInfo: {
                          ...addData.basicInfo,
                          mapUrl: e.target.value,
                        },
                      })
                    }
                    placeholder="https://www.google.com/maps/embed?..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    補足情報
                  </label>
                  <textarea
                    value={addData.basicInfo.otherText}
                    onChange={(e) =>
                      setAddData({
                        ...addData,
                        basicInfo: {
                          ...addData.basicInfo,
                          otherText: e.target.value,
                        },
                      })
                    }
                    placeholder="その他補足情報があれば..."
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400 resize-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ナビゲーションボタン */}
        <div className="flex justify-between mt-6">
          {currentStep > 1 ? (
            <button
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 disabled:opacity-30 hover:bg-gray-50 transition-colors"
            >
              ← 前へ
            </button>
          ) : (
            <div />
          )}
          {currentStep < 4 ? (
            <button
              onClick={() => setCurrentStep((prev) => prev + 1)}
              disabled={currentStep === 4}
              className="px-6 py-2 rounded-lg bg-red-500 text-white disabled:opacity-30 hover:bg-red-600 transition-colors"
            >
              次へ →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              登録する
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddGymPage
