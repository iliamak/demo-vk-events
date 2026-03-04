import { QRCodeSVG } from 'qrcode.react';
import {
  ModalCard,
  Button,
  Div,
  Caption,
  Text,
} from '@vkontakte/vkui';
import { Event } from '../types';

interface QRCodeModalProps {
  event: Event;
  open: boolean;
  onClose: () => void;
}

export function QRCodeModal({ event, open, onClose }: QRCodeModalProps) {
  const ticketId = '1234567890';

  return (
    <ModalCard
      id="qr"
      open={open}
      onClose={onClose}
      title={event.title}
    >
      <Div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <div
          style={{
            background: '#fff',
            padding: 16,
            borderRadius: 12,
          }}
        >
          <QRCodeSVG
            value={`vk-events://ticket/${event.id}/${ticketId}`}
            size={200}
            level="H"
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>
            Тип: Стандарт
          </Text>
          <Caption style={{ color: 'var(--vkui--color_text_secondary)', marginTop: 4 }}>
            Билет #{ticketId}
          </Caption>
        </div>

        <Button
          size="l"
          mode="secondary"
          stretched
          onClick={() => {
            navigator.clipboard?.writeText(ticketId).catch(() => {});
          }}
        >
          Копировать код
        </Button>
      </Div>
    </ModalCard>
  );
}
