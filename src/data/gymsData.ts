import type { Gym } from '../types'

const gymsData: Gym[] = [
  {
    id: '1',
    thumbnail:
      'https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'GoldGym',
    address: 'shibuya',
    isFavorite: false,
    photos: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200',
    ],
    description: '渋谷にある著名人も多く通う24時間営業のジムです。',
    equipment: {
      machines: [
        { name: 'トレッドミル', count: 10, unit: '台' },
        { name: 'ダンベル', count: 50, unit: 'kgまで' },
        { name: 'スミスマシーン', count: 4, unit: '台' },
        { name: 'レッグプレス', count: 2, unit: '台' },
      ],
    },
    facilities: {
      shower: true,
      locker: true,
      parking: false,
      bicycleParking: true,
      openAllDay: true,
      wifi: false,
      tattooFriendly: false,
      waterDispenser: true,
      stretchArea: true,
    },
    basicInfo: {
      time: '24時間営業',
      type: ['筋トレ', 'ダイエット'],
      sns: [
        { snstype: 'X', snsImg: '', snsUrl: 'https://x.com/goldgym' },
        { snstype: 'Instagram', snsImg: '', snsUrl: 'https://x.com/goldgym' },
      ],
      access: '渋谷駅から徒歩5分',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.607866880026!2d139.70000147551312!3d35.66203177259334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca7c76038a3%3A0xffbb810f1e4803a6!2z44K044O844Or44OJ44K444OgIOa4i-iwt-adseS6rA!5e0!3m2!1sja!2sjp!4v1776486642923!5m2!1sja!2sjp',
      ohp: 'https://goldgym.jp',
      otherText: '初回体験無料',
    },
    userId: null,
  },
  {
    id: '2',
    thumbnail:
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop',
    name: 'AnytimeFitness',
    address: 'shinagawa',
    isFavorite: false,
    photos: [
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1200',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
      'https://images.unsplash.com/photo-1547592180-85f173990554?w=1200',
      'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1200',
    ],
    description: '品川にある24時間営業のジムです。',
    equipment: {
      machines: [
        { name: 'トレッドミル', count: 8, unit: '台' },
        { name: 'ダンベル', count: 40, unit: 'kgまで' },
        { name: 'ケーブルマシン', count: 3, unit: '台' },
      ],
    },
    facilities: {
      shower: true,
      locker: true,
      parking: true,
      bicycleParking: true,
      openAllDay: true,
      wifi: true,
      tattooFriendly: false,
      waterDispenser: true,
      stretchArea: false,
    },
    basicInfo: {
      time: '24時間営業',
      type: ['筋トレ', '有酸素'],
      sns: [
        {
          snstype: 'Instagram',
          snsImg: '',
          snsUrl: 'https://instagram.com/anytime',
        },
      ],
      access: '品川駅から徒歩3分',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25948.88208037288!2d139.67784467910155!3d35.6126793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0045a6518f%3A0x62a92d89d1bdc72a!2z44Ko44OL44K_44Kk44OG44Kj44OD44OC44ON44K55ZOB5bed5Lit5bu25bqX!5e0!3m2!1sja!2sjp!4v1776486714496!5m2!1sja!2sjp',
      ohp: 'https://anytimefitness.co.jp',
      otherText: '月額会員制です。',
    },
    userId: null,
  },
  {
    id: '3',
    thumbnail:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    name: 'MuscleGym',
    address: 'sekimachi',
    isFavorite: false,
    photos: [
      'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=1200',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200',
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200',
      'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=1200',
    ],
    description: '関町にある本格フリーウェイトジムです。',
    equipment: {
      machines: [
        { name: 'バーベル', count: 100, unit: 'kgまで' },
        { name: 'ダンベル', count: 60, unit: 'kgまで' },
        { name: 'スミスマシン', count: 2, unit: '台' },
        { name: 'レッグプレス', count: 3, unit: '台' },
      ],
    },
    facilities: {
      shower: false,
      locker: true,
      parking: true,
      bicycleParking: false,
      openAllDay: false,
      wifi: false,
      tattooFriendly: true,
      waterDispenser: true,
      stretchArea: true,
    },
    basicInfo: {
      time: '9:00〜22:00',
      type: ['筋トレ', 'パワーリフティング'],
      sns: [{ snstype: 'X', snsImg: '', snsUrl: 'https://x.com/musclegym' }],
      access: '関町駅から徒歩8分',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.0374423730736!2d139.57489407551614!3d35.72529767257305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018eefa3d33180f%3A0x3e8fc051bf4e1761!2z44Oe44OD44K544Or44K444OgIOmWoueUuuW6lw!5e0!3m2!1sja!2sjp!4v1776486686894!5m2!1sja!2sjp',
      ohp: 'https://musclegym.jp',
      otherText: 'タトゥーOKの数少ないジムです。',
    },
    userId: null,
  },
]

export default gymsData
