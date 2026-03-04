import { useRef } from 'react';
import { ActionSheet, ActionSheetItem } from '@vkontakte/vkui';
import { Icon28CalendarAddOutline, Icon28Cancel } from '@vkontakte/icons';

interface MoreActionSheetProps {
  onClose: () => void;
  onUnregister: () => void;
  onAddToCalendar: () => void;
}

export function MoreActionSheet({ onClose, onUnregister, onAddToCalendar }: MoreActionSheetProps) {
  const toggleRef = useRef<HTMLElement>(null);

  return (
    <ActionSheet onClose={onClose} toggleRef={toggleRef}>
      <ActionSheetItem
        before={<Icon28CalendarAddOutline />}
        onClick={() => {
          onAddToCalendar();
          onClose();
        }}
      >
        Добавить в календарь
      </ActionSheetItem>
      <ActionSheetItem
        before={<Icon28Cancel />}
        mode="destructive"
        onClick={() => {
          onUnregister();
          onClose();
        }}
      >
        Отменить регистрацию
      </ActionSheetItem>
    </ActionSheet>
  );
}
