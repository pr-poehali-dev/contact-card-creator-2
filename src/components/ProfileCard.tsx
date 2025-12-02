import { Card } from '@/components/ui/card'
import Icon from '@/components/ui/icon'
import { Button } from '@/components/ui/button'

const ProfileCard = () => {
  const socialLinks = [
    { name: 'Github', icon: 'Github', url: 'https://github.com' },
    { name: 'Linkedin', icon: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com' },
  ]

  return (
    <Card className="w-full max-w-md bg-slate-800/90 backdrop-blur-sm border border-slate-700 shadow-2xl overflow-hidden animate-fade-in">
      <div className="p-8 sm:p-12">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Максимов Дмитрий Вадимович
          </h1>
          <p className="text-lg text-slate-300 font-medium">
            Product Designer
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-8">
          <a 
            href="mailto:agressorx8@yandex.ru"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
              <Icon name="Mail" size={20} className="text-blue-400" />
            </div>
            <span className="text-slate-200 font-medium">agressorx8@yandex.ru</span>
          </a>

          <a 
            href="tel:+79870020960"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
              <Icon name="Phone" size={20} className="text-blue-400" />
            </div>
            <span className="text-slate-200 font-medium">+7 987 002-09-60</span>
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-8"></div>

        {/* Social Links */}
        <div className="flex justify-center gap-3">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full hover:bg-slate-700/50 hover:scale-110 transition-all duration-200"
              asChild
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <Icon name={social.icon} size={22} className="text-slate-300 hover:text-blue-400 transition-colors" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default ProfileCard