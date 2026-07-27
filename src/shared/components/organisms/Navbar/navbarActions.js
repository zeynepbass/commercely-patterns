import {
    Heart,
    Moon,
    ShoppingCart,
  } from "lucide-react";
  
  import Avatar from "@/shared/components/atoms/Avatar";
  import NotificationButton from "@/shared/components/molecules/NotificationButton";
  import useCartStore from "@/features/cart/store/useCartStore";


  export default function NavbarActions() {
    const { totalItems } = useCartStore();
    return (
      <div className="flex items-center gap-2">
  
        <NotificationButton count={8}>
          <Heart size={20} />
        </NotificationButton>
        <NotificationButton count={totalItems}>
    <ShoppingCart size={20}/>
</NotificationButton>
  
        <NotificationButton>
          <Moon size={20} />
        </NotificationButton>
  
        <Avatar
          src="/images/avatar.png"
          fallback="ZB"
        />
  
      </div>
    );
  }