# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  if Vagrant.has_plugin? "vagrant-vbguest"
    config.vbguest.no_install  = true
    config.vbguest.auto_update = false
    config.vbguest.no_remote   = true
  end
  config.vm.define :server do |server|
    server.vm.box = "bento/ubuntu-22.04"
    server.vm.box_version = "202407.23.0"
    server.vm.network :private_network, ip: "192.168.50.3"
    server.vm.hostname = "server"
    server.vm.provision "shell", path: "script.sh"
  end
end
