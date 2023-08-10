import{ab as i,C as e,D as s,ad as n}from"./framework-e618a78f.js";const d={},l=n(`<h2 id="_12代核显直通配置文件备份" tabindex="-1"><a class="header-anchor" href="#_12代核显直通配置文件备份" aria-hidden="true">#</a> 12代核显直通配置文件备份</h2><blockquote><p>CPU:12100 PVE:8.0.3 内核Linux 6.2.16-3-pve #1 SMP PREEMPT_DYNAMIC PVE 6.2.16-3 (2023-06-17T05:58Z)</p></blockquote><p>有图像但没有声音</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>args: -set device.hostpci0.addr=02.0 -set device.hostpci0.x-igd-gms=1 -set device.hostpci0.x-igd-opregion=on
bios: ovmf
boot: order=scsi0;ide2;net0;ide0
cores: 8
cpu: host
efidisk0: local:105/vm-105-disk-0.qcow2,efitype=4m,pre-enrolled-keys=1,size=528K
hostpci0: 0000:00:02.0,romfile=vbios_gvt_uefi.rom,x-vga=1
hostpci1: 0000:00:1f.3
ide0: local:iso/virtio-win-0.1.229.iso,media=cdrom,size=522284K
ide2: local:iso/Windows.iso,media=cdrom,size=4759040K
machine: pc-i440fx-8.0
memory: 16384
meta: creation-qemu=8.0.2,ctime=1691592403
name: Windows10
net0: virtio=B6:65:60:2B:5B:C8,bridge=vmbr0,firewall=1
numa: 0
ostype: win11
scsi0: local:105/vm-105-disk-1.qcow2,iothread=1,size=45G
scsihw: virtio-scsi-single
smbios1: uuid=9e8a196b-1817-424b-9803-5845329a30ff
sockets: 1
tpmstate0: local:105/vm-105-disk-2.raw,size=4M,version=v2.0
usb0: host=1-4.1,usb3=1
usb1: host=1-4.4,usb3=1
vga: none
vmgenid: 65b1a594-cd04-441b-b39d-c766a2bfa5d0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function a(v,o){return e(),s("div",null,c)}const m=i(d,[["render",a],["__file","Windows.html.vue"]]);export{m as default};
