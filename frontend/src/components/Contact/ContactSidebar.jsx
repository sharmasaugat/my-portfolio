import { memo } from 'react';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import { animations } from '../Common/AnimatedValue';
import { CONTACT_DATA, CONTACT_ICONS } from '../../data/ContactData';
import styles from '../../styles/ContactSidebar.module.css';

const Avatar = () => (
  <div className={styles.avatar}>
    <div className={styles.avatarGlow} />
    <div className={styles.avatarInner}>
      <div className={styles.avatarContent}>
        <div className={styles.avatarIcon}>
          <Bot className="w-12 h-12 text-white" />
        </div>
      </div>
    </div>
    <div className={styles.statusIndicator}>
      <div className={styles.statusBadge}>
        <div className={styles.statusIndicatorInner}>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-xs text-white font-medium">Online & Ready</span>
        </div>
      </div>
    </div>
  </div>
);

const ContactInfo = () => (
  <div className={styles.contactInfo}>
    <h2 className={styles.heading}>{CONTACT_DATA.title}</h2>
    <p className="text-gray-400 mb-8">{CONTACT_DATA.subtitle}</p>
    <ContactDetails />
    <SocialLinks />
  </div>
);

const ContactDetails = () => (
  <div className="space-y-4 mb-8">
    {Object.entries(CONTACT_DATA.contactInfo).map(([key, value], index) => {
      const Icon = CONTACT_ICONS[key];
      return (
        <motion.div
          key={key}
          className={styles.contactItem}
          {...animations.sidebar.item}
          transition={{ delay: index * 0.1 }}
        >
          <div className={styles.iconWrapper}>
            <Icon size={20} />
          </div>
          <span>{value}</span>
        </motion.div>
      );
    })}
  </div>
);

const SocialLinks = () => (
  <div className={styles.socialLinks}>
    {Object.entries(CONTACT_DATA.socials).map(([platform, link]) => {
      const Icon = CONTACT_ICONS[platform];
      return (
        <a
          key={platform}
          href={link}
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${platform} Profile`}
        >
          <Icon size={20} className="text-gray-300" />
        </a>
      );
    })}
  </div>
);

const ContactSidebar = () => (
  <motion.div 
    className={styles.container}
    {...animations.sidebar.container}
  >
    <Avatar />
    <ContactInfo />
  </motion.div>
);

export default memo(ContactSidebar);