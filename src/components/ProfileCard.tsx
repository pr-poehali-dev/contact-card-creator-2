import { Card } from '@/components/ui/card'
import Icon from '@/components/ui/icon'
import { Button } from '@/components/ui/button'

const ProfileCard = () => {
  const socialLinks = [
    { name: 'WhatsApp', icon: 'MessageCircle', url: 'https://wa.me/79870020960' },
    { name: 'VK', icon: 'Music', url: 'https://vk.com/surround.sound' },
    { name: 'Max.ru', icon: 'Link', url: 'https://max.ru/u/f9LHodD0cOIl6WpmM19gE5O-Wmzd1UG6KOC8rk89geP9_52tUVDb19aWRfE' },
    { name: 'Telegram', icon: 'Send', url: 'https://t.me/z4mknutost8' },
  ]

  return (
    <Card className="w-full max-w-md bg-slate-950/90 backdrop-blur-sm border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden animate-fade-in">
      <div className="p-8 sm:p-12">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/50">
              <img 
                src="https://cdn.poehali.dev/files/43e7e7e3-4164-4489-8150-3e87e8653512.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl font-bold text-cyan-400 tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            Максимов Дмитрий Вадимович
          </h1>
          <p className="text-lg text-cyan-300 font-medium drop-shadow-[0_0_10px_rgba(103,232,249,0.4)]">
            Contact Card
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-8">
          <a 
            href="mailto:agressorx8@yandex.ru"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
              <Icon name="Mail" size={20} className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            </div>
            <span className="text-cyan-300 font-medium drop-shadow-[0_0_8px_rgba(103,232,249,0.4)]">agressorx8@yandex.ru</span>
          </a>

          <a 
            href="tel:+79870020960"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
              <Icon name="Phone" size={20} className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            </div>
            <span className="text-cyan-300 font-medium drop-shadow-[0_0_8px_rgba(103,232,249,0.4)]">+7 987 002-09-60</span>
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((social) => (
            <div key={social.name} className="flex flex-col items-center gap-0.5">
              <span className="text-xs text-cyan-400/80 font-medium">{social.name}</span>
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full hover:bg-slate-700/50 hover:scale-110 transition-all duration-200"
                asChild
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <Icon name={social.icon} size={22} className="text-cyan-400 hover:text-cyan-300 transition-colors drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default ProfileCard