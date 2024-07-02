local tool = script.Parent

tool.Equipped:Connect(function()
	print('this tool is equipped')
	tool:Activate()
	--activate tool automatically upon equip
	--kind of like a method
end)

tool.Unequipped:Connect(function()
	print('this tool is unequipped')
end)

tool.Activated:Connect(function()
	print('tool has been activated')
end)

tool.Deactivated:Connect(function()
	print('tool has been deactivated')
end)

