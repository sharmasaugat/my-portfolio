import { memo } from 'react';
import styles from '../../styles/contact-form.module.css';
import { GradientBackground } from './GradientBackground';
import { AnimatedAvatar } from './AnimatedAvatar';
import { ContactButtons } from './ContactButtons';
import { ContactInfo } from './ContactInfo';
import { ContactModal } from './ContactModal';
import { TypingGreeting } from './TypingGreeting';
import { SocialLinks } from './SocialLinks';
import { SuccessMessage } from './SuccessMessage';
import Loading from '../Common/Loading';
import { useContactForm } from '../../hooks/useContactForm';

const ContactForm = () => {
  const formState = useContactForm();
  
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        {formState.initialLoading ? (
          <div className={styles.loadingContainer}>
            <Loading size="lg" />
          </div>
        ) : (
          <>
            <GradientBackground />
            <div className={styles.content}>
              <div className={styles.leftColumn}>
                <AnimatedAvatar />
                <div className={styles.infoSection}>
                  <TypingGreeting />
                  <ContactButtons onOpenModal={formState.toggleModal} />
                  <ContactInfo />
                  <SocialLinks />
                </div>
              </div>
              <div className={styles.rightColumn} />
            </div>

            <ContactModal
              showModal={formState.showModal} 
              activeTab={formState.activeTab}
              onClose={() => formState.toggleModal(false)}
              {...formState}
            />
            
            <SuccessMessage message={formState.successMessage} />
          </>
        )}
      </div>
    </div>
  );
};

export default memo(ContactForm);