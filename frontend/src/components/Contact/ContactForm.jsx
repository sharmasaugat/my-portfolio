import { memo } from 'react';
import styles from '../../styles/contactStyles/contact-form.module.css';
import { GradientBackground } from './GradientBackground';
import { AnimatedAvatar } from './AnimatedAvatar';
import { ContactButtons } from '../Button/ContactButtons';
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
      <div className={`${styles.formWrapper} my-4 lg:my-8`}>
        {formState.initialLoading ? (
          <div className="min-h-[300px] flex items-center justify-center">
            <Loading size="lg" />
          </div>
        ) : (
          <>
            <GradientBackground />
            <div className={`${styles.content} py-2`}>
              <div className={styles.leftColumn}>
                <AnimatedAvatar />
                <div className={styles.infoSection}>
                  <TypingGreeting />
                  <ContactButtons 
                    onOpenModal={(tab) => formState.toggleModal(true, tab)} 
                  />
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